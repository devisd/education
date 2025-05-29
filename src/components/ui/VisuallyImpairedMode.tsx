'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Типы для настроек режима для слабовидящих
type FontSize = 'normal' | 'medium' | 'large'
type ColorScheme = 'normal' | 'white' | 'black' | 'blue' | 'yellow' | 'green'
type ImageDisplay = 'normal' | 'hidden'
type Spacing = 'normal' | 'medium' | 'large'
type FontFamily = 'default' | 'arial' | 'times' | 'openDyslexic'
type CursorSize = 'normal' | 'large'

interface VisuallyImpairedModeState {
    enabled: boolean
    fontSize: FontSize
    colorScheme: ColorScheme
    imageDisplay: ImageDisplay
    spacing: Spacing
    fontFamily: FontFamily
    cursorSize: CursorSize
}

// Состояние по умолчанию
const defaultState: VisuallyImpairedModeState = {
    enabled: false,
    fontSize: 'normal',
    colorScheme: 'normal',
    imageDisplay: 'normal',
    spacing: 'normal',
    fontFamily: 'default',
    cursorSize: 'normal',
}

// Ключ для локального хранилища
const STORAGE_KEY = 'visually-impaired-mode'

// Пользовательское событие для синхронизации состояния
const TOGGLE_EVENT = 'visually-impaired-mode-toggle'
// Событие для переключения видимости панели
const TOGGLE_PANEL_EVENT = 'visually-impaired-mode-panel-toggle'

// Компонент панели режима для слабовидящих
export const VisuallyImpairedModePanel = () => {
    const [state, setState] = useState<VisuallyImpairedModeState>(defaultState)
    const [isOpen, setIsOpen] = useState(false)
    const [showPanel, setShowPanel] = useState(false)

    // Загружаем настройки из localStorage и слушаем события
    useEffect(() => {
        const loadSettings = () => {
            const savedSettings = localStorage.getItem(STORAGE_KEY)
            if (savedSettings) {
                try {
                    const parsedSettings = JSON.parse(savedSettings)
                    setState(parsedSettings)
                    if (parsedSettings.enabled) {
                        applySettings(parsedSettings)
                    }
                } catch (e) {
                    console.error('Error parsing saved settings:', e)
                }
            }
        }

        // Загружаем настройки
        loadSettings()

        // Слушаем изменения от других компонентов
        const handleToggle = () => {
            loadSettings()
        }

        // Слушаем событие открытия/закрытия панели
        const handlePanelToggle = (e: Event) => {
            const customEvent = e as CustomEvent;
            const shouldShow = customEvent.detail?.show;

            if (shouldShow !== undefined) {
                setShowPanel(shouldShow);
            } else {
                setShowPanel(prev => !prev);
            }
        }

        window.addEventListener(TOGGLE_EVENT, handleToggle)
        window.addEventListener(TOGGLE_PANEL_EVENT, handlePanelToggle)

        return () => {
            window.removeEventListener(TOGGLE_EVENT, handleToggle)
            window.removeEventListener(TOGGLE_PANEL_EVENT, handlePanelToggle)
        }
    }, [])

    // Применяем настройки к документу
    const applySettings = (settings: VisuallyImpairedModeState) => {
        // Применяем размер шрифта
        document.documentElement.dataset.fontSize = settings.fontSize

        // Применяем цветовую схему
        document.documentElement.dataset.colorScheme = settings.colorScheme

        // Применяем отображение изображений
        document.documentElement.dataset.imageDisplay = settings.imageDisplay

        // Применяем интервалы
        document.documentElement.dataset.spacing = settings.spacing

        // Применяем шрифт
        document.documentElement.dataset.fontFamily = settings.fontFamily

        // Применяем размер курсора
        document.documentElement.dataset.cursorSize = settings.cursorSize

        // Добавляем базовый класс, если включено
        if (settings.enabled) {
            document.documentElement.classList.add('visually-impaired-mode')
        } else {
            document.documentElement.classList.remove('visually-impaired-mode')
        }
    }

    // Если панель не должна отображаться, возвращаем null
    if (!showPanel) {
        return null
    }

    // Если режим не включен, но панель запросили - включаем режим
    if (!state.enabled) {
        const newState = { ...state, enabled: true }
        setState(newState)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
        applySettings(newState)
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-[20000] bg-white shadow-lg border-b-2 border-blue-150">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black font-medium flex items-center"
                        aria-expanded={isOpen}
                        aria-controls="accessibility-panel"
                    >
                        <span className="mr-2 text-blue-150">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                            </svg>
                        </span>
                        Настройки отображения
                        <svg className={`ml-2 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            const newState = { ...state, enabled: false }
                            setState(newState)
                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                            applySettings(newState)

                            // Скрываем панель при отключении режима
                            const panelEvent = new CustomEvent(TOGGLE_PANEL_EVENT, { detail: { show: false } });
                            window.dispatchEvent(panelEvent);
                        }}
                        className="text-white bg-blue-150 hover:bg-blue-700 px-3 py-2 rounded-md transition-colors duration-200 font-medium"
                        aria-label="Выключить версию для слабовидящих"
                    >
                        Обычная версия сайта
                    </button>
                </div>
                {isOpen && (
                    <div id="accessibility-panel" className="py-4 border-t mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Управление размером шрифта */}
                            <div>
                                <h3 className="font-medium mb-2 text-blue-150">Размер шрифта</h3>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, fontSize: 'normal' as FontSize }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.fontSize === 'normal' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.fontSize === 'normal'}
                                    >
                                        A
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, fontSize: 'medium' as FontSize }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.fontSize === 'medium' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.fontSize === 'medium'}
                                    >
                                        A+
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, fontSize: 'large' as FontSize }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.fontSize === 'large' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.fontSize === 'large'}
                                    >
                                        A++
                                    </button>
                                </div>
                            </div>

                            {/* Управление типом шрифта */}
                            <div>
                                <h3 className="font-medium mb-2 text-blue-150">Шрифт</h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, fontFamily: 'default' as FontFamily }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.fontFamily === 'default' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.fontFamily === 'default'}
                                    >
                                        Обычный
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, fontFamily: 'arial' as FontFamily }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.fontFamily === 'arial' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.fontFamily === 'arial'}
                                        style={{ fontFamily: 'Arial, sans-serif' }}
                                    >
                                        Arial
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, fontFamily: 'times' as FontFamily }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.fontFamily === 'times' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.fontFamily === 'times'}
                                        style={{ fontFamily: 'Times New Roman, serif' }}
                                    >
                                        Times
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, fontFamily: 'openDyslexic' as FontFamily }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.fontFamily === 'openDyslexic' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.fontFamily === 'openDyslexic'}
                                        style={{ fontFamily: 'OpenDyslexic, Arial, sans-serif' }}
                                    >
                                        OpenDyslexic
                                    </button>
                                </div>
                            </div>

                            {/* Управление размером курсора */}
                            <div>
                                <h3 className="font-medium mb-2 text-blue-150">Размер курсора</h3>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, cursorSize: 'normal' as CursorSize }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.cursorSize === 'normal' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.cursorSize === 'normal'}
                                    >
                                        Обычный
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, cursorSize: 'large' as CursorSize }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.cursorSize === 'large' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.cursorSize === 'large'}
                                    >
                                        Большой
                                    </button>
                                </div>
                            </div>

                            {/* Управление цветовой схемой */}
                            <div className="md:col-span-3">
                                <h3 className="font-medium mb-2 text-blue-150">Цветовая схема</h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, colorScheme: 'normal' as ColorScheme }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.colorScheme === 'normal' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.colorScheme === 'normal'}
                                    >
                                        Обычная
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, colorScheme: 'white' as ColorScheme }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.colorScheme === 'white' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.colorScheme === 'white'}
                                        style={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}
                                    >
                                        Светлая
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, colorScheme: 'black' as ColorScheme }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.colorScheme === 'black' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.colorScheme === 'black'}
                                        style={{ backgroundColor: 'black', color: 'white', borderColor: 'white' }}
                                    >
                                        Темная
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, colorScheme: 'blue' as ColorScheme }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.colorScheme === 'blue' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.colorScheme === 'blue'}
                                        style={{ backgroundColor: '#9dd1ff', color: '#063462', borderColor: '#063462' }}
                                    >
                                        Синяя
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, colorScheme: 'yellow' as ColorScheme }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.colorScheme === 'yellow' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.colorScheme === 'yellow'}
                                        style={{ backgroundColor: '#ffff00', color: '#000000', borderColor: '#000000' }}
                                    >
                                        Желтая
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, colorScheme: 'green' as ColorScheme }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.colorScheme === 'green' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.colorScheme === 'green'}
                                        style={{ backgroundColor: '#3f704d', color: '#ffffff', borderColor: '#ffffff' }}
                                    >
                                        Зеленая
                                    </button>
                                </div>
                            </div>

                            {/* Управление отображением изображений */}
                            <div className="md:col-span-2">
                                <h3 className="font-medium mb-2 text-blue-150">Изображения</h3>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, imageDisplay: 'normal' as ImageDisplay }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.imageDisplay === 'normal' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.imageDisplay === 'normal'}
                                    >
                                        Показать
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, imageDisplay: 'hidden' as ImageDisplay }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.imageDisplay === 'hidden' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.imageDisplay === 'hidden'}
                                    >
                                        Скрыть
                                    </button>
                                </div>
                            </div>

                            {/* Управление интервалами */}
                            <div>
                                <h3 className="font-medium mb-2 text-blue-150">Интервалы</h3>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, spacing: 'normal' as Spacing }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.spacing === 'normal' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.spacing === 'normal'}
                                    >
                                        Обычные
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, spacing: 'medium' as Spacing }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.spacing === 'medium' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.spacing === 'medium'}
                                    >
                                        Средние
                                    </button>
                                    <button
                                        onClick={() => {
                                            const newState = { ...state, spacing: 'large' as Spacing }
                                            setState(newState)
                                            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                            applySettings(newState)
                                        }}
                                        className={`px-3 py-1 border ${state.spacing === 'large' ? 'bg-blue-150 text-white' : 'bg-white text-black'}`}
                                        aria-pressed={state.spacing === 'large'}
                                    >
                                        Большие
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={() => {
                                    const newState = { ...defaultState, enabled: true }
                                    setState(newState)
                                    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
                                    applySettings(newState)

                                    // Уведомляем о смене настроек
                                    const event = new Event(TOGGLE_EVENT)
                                    window.dispatchEvent(event)
                                }}
                                className="px-4 py-2 bg-blue-150 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                            >
                                Сбросить настройки
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

// Компонент кнопки переключения
export const VisuallyImpairedModeToggle = ({
    compact = false,
    fontSize = 'normal',
    verticalLayout = false,
    onlyIcon = false,
}: {
    compact?: boolean;
    fontSize?: 'small' | 'normal';
    verticalLayout?: boolean;
    onlyIcon?: boolean;
}) => {
    const [enabled, setEnabled] = useState(false)
    const [mounted, setMounted] = useState(false)

    // Проверяем, включен ли режим при монтировании компонента
    useEffect(() => {
        setMounted(true)
        const savedSettings = localStorage.getItem(STORAGE_KEY)
        if (savedSettings) {
            try {
                const parsedSettings = JSON.parse(savedSettings)
                setEnabled(parsedSettings.enabled)
            } catch (e) {
                console.error('Error parsing saved settings:', e)
            }
        }
    }, [])

    // Переключаем режим для слабовидящих и показываем панель
    const toggleMode = () => {
        const savedSettings = localStorage.getItem(STORAGE_KEY)
        let settings: VisuallyImpairedModeState = defaultState

        if (savedSettings) {
            try {
                settings = JSON.parse(savedSettings)
            } catch (e) {
                console.error('Error parsing saved settings:', e)
            }
        }

        const newEnabled = !enabled
        const newSettings = { ...settings, enabled: newEnabled }

        setEnabled(newEnabled)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))

        // Создаем и диспатчим пользовательское событие для обновления настроек
        const event = new Event(TOGGLE_EVENT)
        window.dispatchEvent(event)

        // Если включили режим, показываем панель
        if (newEnabled) {
            const panelEvent = new CustomEvent(TOGGLE_PANEL_EVENT, {
                detail: { show: true }
            });
            window.dispatchEvent(panelEvent);

            document.documentElement.classList.add('visually-impaired-mode')
            document.documentElement.dataset.fontSize = newSettings.fontSize
            document.documentElement.dataset.colorScheme = newSettings.colorScheme
            document.documentElement.dataset.imageDisplay = newSettings.imageDisplay
            document.documentElement.dataset.spacing = newSettings.spacing
            document.documentElement.dataset.fontFamily = newSettings.fontFamily
            document.documentElement.dataset.cursorSize = newSettings.cursorSize
        } else {
            // Если выключили режим, скрываем панель
            const panelEvent = new CustomEvent(TOGGLE_PANEL_EVENT, {
                detail: { show: false }
            });
            window.dispatchEvent(panelEvent);

            document.documentElement.classList.remove('visually-impaired-mode')
            document.documentElement.removeAttribute('data-font-size')
            document.documentElement.removeAttribute('data-color-scheme')
            document.documentElement.removeAttribute('data-image-display')
            document.documentElement.removeAttribute('data-spacing')
            document.documentElement.removeAttribute('data-font-family')
            document.documentElement.removeAttribute('data-cursor-size')
        }
    }

    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={toggleMode}
            aria-label="Версия для слабовидящих"
            className={
                onlyIcon
                    ? 'p-0 w-8 h-8 flex items-center justify-center bg-blue-150 text-white hover:bg-blue-700 rounded transition-colors duration-200'
                    : `flex items-center whitespace-nowrap text-white bg-blue-150 hover:bg-blue-700 transition-colors duration-200 ${compact
                        ? 'p-2 rounded-md'
                        : fontSize === 'small'
                            ? `${verticalLayout ? 'px-2 py-1 w-auto' : 'px-2 py-1'} rounded-md text-xs`
                            : 'px-3 py-2 rounded-md'
                    }`
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={
                    onlyIcon
                        ? 'w-6 h-6'
                        : compact
                            ? 'w-6 h-6'
                            : fontSize === 'small'
                                ? verticalLayout ? 'w-5 h-5 mb-1' : 'w-4 h-4 mr-1'
                                : 'w-6 h-6 mr-2'
                }
            >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                />
            </svg>
            {!compact && !onlyIcon && (
                <span className={`font-medium ${fontSize === 'small'
                    ? verticalLayout
                        ? 'text-[10px] leading-tight'
                        : 'text-xs'
                    : 'text-base lg:text-xs'
                    }`}>
                </span>
            )}
        </button>
    )
}

// Провайдер режима для слабовидящих
export const VisuallyImpairedModeProvider = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return createPortal(
        <VisuallyImpairedModePanel />,
        document.body
    )
} 