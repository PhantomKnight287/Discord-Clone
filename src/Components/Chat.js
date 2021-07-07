import { AddCircleSharp, CardGiftcard, EmojiEmotions } from '@material-ui/icons'
import { GifTwoTone } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../Css/Chat.css'
import { selectChannelId, selectChannelName } from '../features/appSlice'
import { selectUser } from '../features/userSlice'
import ChatHeader from './ChatHeader'
import db from './firebase'
import Message from './Message'
import firebase from'firebase'
var i=0
function Chat() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        if (channelId){
            db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapshot)=>{
                setMessages(snapshot.docs.map((doc)=>doc.data()))
            })
        }
    })
    const sendMessage=(e)=>{
        e.preventDefault()
        db.collection('channels').doc(channelId).collection('messages').add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user,
        })
        setInput('')
    }

    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />
            <div className="chat_messages">
                {messages.map(message => {
                    return <Message id={i++} timestamp={message.timestamp} message={message.message} user={message.user}/>
                })}


            </div>
            <div className="chat_input">
                <AddCircleSharp fontSize='large' />
                <form>
                    <input disabled={!channelId} value={input} onChange={e => { setInput(e.target.value) }} placeholder={`Message #${channelName}`} />
                    <button disabled={!channelId} onClick={sendMessage} className='chat_inputButton' type='submit'>Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcard />
                    <GifTwoTone fontSize='large' />
                    <EmojiEmotions fontSize='large' />
                </div>
            </div>
        </div>
    )
}

export default Chat
