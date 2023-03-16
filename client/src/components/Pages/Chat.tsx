/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { useAppSelector } from '../../features/reduxHooks'

type ChatPropsType ={
  seller: string | undefined
}


function Chat({seller}: ChatPropsType): JSX.Element {
  const user = useAppSelector(state => state.userData.user?.username)
	const [username, setUsername] = useState(seller)

	function createDirectChat(creds: any): void {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	return (
		<ChatEngine
			height='40vh'
			userName={user}
			userSecret='123'
			projectID='ee1a042c-0dd1-48d7-aff6-b00ca94573cc'
			renderNewChatForm={(creds: any) => createDirectChat(creds)}
		/>
	)
}

export default Chat;