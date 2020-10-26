import { CommonStoreDTO } from './dto';

const initialState: CommonStoreDTO = {
    taskList: [],
    task: null,
    isAddressModalOpen: false,
    scrollRef: null,
    commentsYPosition: 0
};

export default initialState;
