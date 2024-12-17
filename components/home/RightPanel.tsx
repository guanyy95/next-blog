import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import ChatPlaceHolder from "./ChatPlaceHolder";
import { Video } from "lucide-react";
import MessageContainer from "./MessageContainder";
import MessageInput from "./MessageInput";


const RightPanel = () => {
	const selectedConversation = null;
	if (!selectedConversation) return <ChatPlaceHolder />;

	const conversationName = "John Doe";

	return (
		<div className='w-3/4 flex flex-col'>
			<div className='w-full sticky top-0 z-50'>
				{/* Header */}
				<div className='flex justify-between bg-gray-primary p-3'>
					<div className='flex gap-3 items-center'>
						<Avatar>
                            <AvatarImage src={"/placeholder.png"} className='object-cover' />
                            <AvatarFallback >
                                <div className='animate-pulse bg-gray-tertiary w-full h-full rounded-full' />
                            </AvatarFallback>
						</Avatar>
						<div className='flex flex-col'>
							<p>{conversationName}</p>
							{/* {isGroup && <GroupMembersDialog />} */}
						</div>
					</div>

					<div className='flex items-center gap-7 mr-5'>
						<a href='/video-call' target='_blank'>
                            <Video size={23}/>
						</a>
					</div>
				</div>
			</div>
			{/* CHAT MESSAGES */}
            <MessageContainer />

			{/* INPUT */}
			<MessageInput />
		</div>
	);
}

export default RightPanel