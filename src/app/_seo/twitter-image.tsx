import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Образовательный терминал'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 64,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 48,
                }}
            >
                <div style={{
                    color: '#d76944',
                    fontSize: 96,
                    fontWeight: 'bold',
                    marginBottom: 48,
                }}>
                    Образовательный терминал
                </div>
                <div style={{
                    color: '#333',
                    textAlign: 'center',
                    fontSize: 48,
                    maxWidth: '80%',
                }}>
                    Профессиональное обучение в Иркутске
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
} 