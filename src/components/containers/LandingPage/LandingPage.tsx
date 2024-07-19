import React, { useCallback, useState } from 'react';
import './LandingPage.scss';
import { FlexBox } from 'components/presentational/FlexBox/FlexBox';
import { NAV_LINK_DIRECTION, NavLink } from 'components/presentational/NavLink/NavLink';
import { ResumePagePath } from 'components/containers/ResumePage/ResumePage';
import cx from 'classnames';
import { APIClient } from 'clients/apiClient';
import { ArchitecturePagePath } from '../ArchitecturePage/ArchitecturePage';


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

export interface EmptyChatMessageProps {
  messagesState: MessageProps[]
}

export const EmptyChatMessage = ({
  messagesState
}: EmptyChatMessageProps) => {
  return <>
    {
      messagesState.length == 0 ?
        <FlexBox className='EmptyChatMessage' direction='column' justify='center' alignItems='center'>
          <span className='EmptyChatMessageInner'>this is a <i>very slow</i> ai chatbot with knowledge of elias's resume. say hi!</span>
        </FlexBox>:
        <></>
    }
  </>
}


export const Chat = () => {
  // state
  const [messagesState, setMessagesState] = useState([] as MessageProps[]);
  const [loadingState, setLoadingState] = useState(false);

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
    setLoadingState(true)
    setTimeout(() => setLoadingState(false), 5000)
    const response = await APIClient.prompt(message);
    setLoadingState(false)
    addMessageToChat(response.message, MESSAGE_ORIGIN.API);
  }

  return (
    <>
      <EmptyChatMessage messagesState={messagesState}/>
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
          <ChatInput onSubmit={emitMessage} isDisabled={loadingState}/>
        </FlexBox>
      </div>
    </>
  )};


export interface ChatInputProps {
  onSubmit: (message: string) => void;
  isDisabled: boolean;
}

export const ChatInput = ({
  onSubmit,
  isDisabled,
}: ChatInputProps) => {
  // state
  const [messageState, setMessageState] = useState('');

  // handlers
  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const eventValue = event.currentTarget.value;
    setMessageState(eventValue);
  }

  const handleSubmit = () => {
    if(!isDisabled) {
      onSubmit(messageState);
      setMessageState('');
    }
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
            <div className={cx('arrow-button', {
              isDisabled,
            })} onClick={handleSubmit}>
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
    <NavLink text='just the plaintext resume behind here :)' path={ResumePagePath} direction={NAV_LINK_DIRECTION.LEFT}/>
    <NavLink text='pay no attention to that man behind the curtain!' path={ArchitecturePagePath} direction={NAV_LINK_DIRECTION.RIGHT}/>
    <div className='LandingPage'>
      <FlexBox className='LandingPageInner' direction='column' alignItems='center'>
        <Chat/>
      </FlexBox>
    </div>
  </>
);