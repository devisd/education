import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message, toEmail } = body;

        // Проверка наличия обязательных полей
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Все поля обязательны для заполнения' },
                { status: 400 }
            );
        }

        // Создаем транспорт для отправки писем
        // Примечание: в реальном проекте нужно настроить SMTP-сервер и добавить 
        // данные аутентификации в переменные окружения
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.mail.ru',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER || 'your_smtp_username',
                pass: process.env.SMTP_PASSWORD || 'your_smtp_password',
            },
        });

        // Формируем содержимое письма
        const mailOptions = {
            from: process.env.SMTP_USER || 'your_smtp_username',
            to: toEmail || 'terminal.38@mail.ru',
            subject: `Новое сообщение с сайта: ${subject}`,
            html: `
        <h1>Новое сообщение с формы обратной связи</h1>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Тема:</strong> ${subject}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        // Отправляем письмо
        await transporter.sendMail(mailOptions);

        // Возвращаем успешный ответ
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Ошибка при отправке сообщения' },
            { status: 500 }
        );
    }
} 