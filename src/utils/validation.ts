export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{10,14}$/
    return phoneRegex.test(phone)
}

export const validateName = (name: string): boolean => {
    return name.length >= 2 && name.length <= 50
}

export const validateMessage = (message: string): boolean => {
    return message.length >= 10 && message.length <= 1000
} 