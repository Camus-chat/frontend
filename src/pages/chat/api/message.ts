import { callAPI } from "@/shared/api";

export const requestReadMessageList = async (roomId: string, nextMessageTimeStamp: string) => {
    return callAPI.clientSide
        .post('/chat/data', { roomId, nextMessageTimeStamp })
        .then((res) => {
            if (process.env.NODE_ENV === 'development') {
                console.log('read message list:', res.data);
            }
            return res.data.messageList;
        })
        .catch((err) => {
            if (process.env.NODE_ENV === 'development') {
                console.log('read message list:', err.response?.data);
            }
            throw new Error('읽은 채팅 내역을 불러오는데 실패했습니다.');
        });
};

export const requestUnreadMessageList = async (roomId: string) => {
    return callAPI.clientSide
        .post('/chat/data/unread', {roomId})
        .then((res) => {
            if (process.env.NODE_ENV === 'development') {
                console.log('unread message list:', res.data);
            }
            return res.data;
        })
        .catch((err) => {
            if (process.env.NODE_ENV === 'development') {
                console.log('unread message list:', err.response?.data);
            }
            throw new Error('안 읽은 채팅 내역을 불러오는데 실패했습니다.');
        });
}