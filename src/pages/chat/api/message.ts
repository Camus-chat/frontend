import { callAPI } from "@/shared/api";

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