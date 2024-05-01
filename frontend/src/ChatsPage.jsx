import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
   

    return ( <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='ae92eae1-2cc3-4860-b02e-df77025ff1c1'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />

    </div>
    )
  };
  export default ChatsPage;