import { ScrollView } from 'react-native';
import { context, actions } from '@stores/common';
import { MutableRefObject, useContext } from 'react';

interface UseScrollIntoComments {
    setScrollRef(ref: ScrollView): void;
    scrollIntoComments(): void;
    setCommentsY(yPosition: number): void;
}

const useScrollToComments = (): UseScrollIntoComments => {
    const { scrollRef, dispatch, commentsYPosition } = useContext(context);
    const setScrollRef = (ref: MutableRefObject<ScrollView | null>) => {
        if (dispatch) dispatch({ type: actions.SET_SCROLL_REF, payload: ref });
    };

    const scrollIntoComments = () => {
        if (scrollRef) scrollRef.current.scrollTo({ x: 0, y: commentsYPosition, animated: false });
    };

    const setCommentsY = (yPosition: number) => {
        if (dispatch) dispatch({ type: actions.SET_COMMENTS_Y_POSITION, payload: yPosition });
    };

    return { setScrollRef, scrollIntoComments, setCommentsY };
};

export default useScrollToComments;
