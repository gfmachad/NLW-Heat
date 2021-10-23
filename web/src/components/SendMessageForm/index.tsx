import { useContext, useState, FormEvent } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../context/auth'
import { api } from '../../services/api'
import styles from './styles.module.scss'

export function SendMessageForm() {
	const { user, signOut } = useContext(AuthContext)
	const [message, setMessage] = useState('')

	async function handleSendMessage(event: FormEvent) {
		event.preventDefault()

		if (!message.trim()) {
			return
		}

		await api.post('messages', { message })

		setMessage('')
	}

	return (
		<div className={styles.sendMessageFormWrapper}>
			<button onClick={signOut} className={styles.signOutButton}>
				<VscSignOut size='20' /> Logout
			</button>
			<header className={styles.userInfo}>
				<div className={styles.userImg}>
					<img src={user?.avatar_url} alt={user?.name} />
				</div>
				<strong className={styles.userName}>{user?.name}</strong>
				<span className={styles.userGithub}>
					<VscGithubInverted size='16' />
					{user?.login}
				</span>
			</header>
			<form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
				<label htmlFor='message'>Message</label>
				<textarea
					name='message'
					id='message'
					placeholder='What is your expectations for the event?'
					onChange={(event) => setMessage(event.target.value)}
					value={message}
				/>

				<button type='submit'>Send Message</button>
			</form>
		</div>
	)
}
