import React, { useCallback, useState } from 'react';
import './LandingPage.scss';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import cx from 'classnames';
import { APIClient } from 'clients/apiClient';


export const LandingPagePath = "/";

export enum MESSAGE_ORIGIN {
  SELF,
  API,
}

export interface MessageProps {
  message: string,
  origin: MESSAGE_ORIGIN,
}

export const Message = ({
  message,
  origin,
}: MessageProps) => {
  return (
    <FlexBox
      className='MessageContainer'
      direction='column'
      alignItems='center'>
      <span className={cx('Origin')}>{origin === MESSAGE_ORIGIN.SELF? 'You' : 'Reception'}</span>
      <span className={cx('Message')}>{message}</span>
    </FlexBox>
  )
}


export const Chat = () => {
  // state
  const [messagesState, setMessagesState] = useState([] as MessageProps[]);

  // start a session on open if one does not exist
  // useEffect(() => {
  //   APIClient.getSession().then(console.log)
  // })

  // handlers
  const addMessageToChat = useCallback((message: string, origin: MESSAGE_ORIGIN) => {
    console.log(message);
    if (message.trim() !== '') {
      setMessagesState((initialState) => {
        return [...initialState, {message, origin}];
      });
    }
  }, [setMessagesState]);

  const emitMessage = async (message: string) => {
    addMessageToChat(message, MESSAGE_ORIGIN.SELF);
    const response = await APIClient.prompt(message);
    addMessageToChat(response.message, MESSAGE_ORIGIN.API);
  }

  return (
    <>
      <div className='Chat'>
        <FlexBox
          className='ChatInner'
          direction='column'
          alignItems='center'
          justify='end'>
          {
            messagesState.map(({
              message,
              origin,
            }, idx) => {
              return (
                <Message key={idx} message={message} origin={origin}/>
              );
            })
          }
          <ChatInput onSubmit={emitMessage}/>
        </FlexBox>
      </div>
    </>
  )};


export interface ChatInputProps {
  onSubmit: (message: string) => void;
}

export const ChatInput = ({
  onSubmit,
}: ChatInputProps) => {
  // state
  const [messageState, setMessageState] = useState('');

  // handlers
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const eventValue = event.currentTarget.value;
    setMessageState(eventValue);
  }

  const handleSubmit = () => {
    onSubmit(messageState);
    setMessageState('');
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <>
      <div className='ChatInput'>
        <FlexBox className='ChatInputInnerContainerVertical'
          direction='column'
          justify='center'
          alignItems='center'>
          <FlexBox className='ChatInputInnerContainerHorizontal'
            alignItems='center'>
            <textarea 
              placeholder='ask me something'
              value={messageState}
              onChange={handleChange}
              onKeyUp={handleKeyPress}
              />
            <div className='arrow-button' onClick={handleSubmit}>
              <span className='arrowhead left'></span>
              <span className='arrowhead right'></span>
              <span className='arrowstem'></span>
            </div>
          </FlexBox>
        </FlexBox>
      </div>
    </>
  );
}


export const LandingPage = () => (
  <>
    <div className='LandingPage'>
      <FlexBox className='LandingPageInner' direction='column' alignItems='center'>
        <Chat/>
      </FlexBox>
    </div>
  </>
);