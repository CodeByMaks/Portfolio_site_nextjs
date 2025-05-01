import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { name, email, message } = await req.json()

	const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN
	const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

	const text = `
📩 Новое сообщение с сайта:
👤 Имя: ${name}
📧 Email: ${email}
✉️ Сообщение: ${message}
  `

	const telegramURL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`

	const res = await fetch(telegramURL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			chat_id: TELEGRAM_CHAT_ID,
			text,
			parse_mode: 'HTML',
		}),
	})

	const data = await res.json()

	return NextResponse.json(data)
}
