import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

function Chat(): JSX.Element {
	const [username, setUsername] = useState('')

	function createDirectChat(creds): void {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) : JSX.Element {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='40vh'
			userName='Takumi'
			userSecret='123'
			projectID='ee1a042c-0dd1-48d7-aff6-b00ca94573cc'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default Chat;