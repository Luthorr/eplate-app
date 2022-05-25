import { UseMutateFunction } from 'react-query/types/react/types';

export type CommentCreationModalProps = {
  isOpen: boolean;
  handleClose: () => void;
  passedPlateText: string;
  handlePostMutation: UseMutateFunction<
    any,
    any,
    {
      userId: number;
      plateText: string;
      commentMsg: string;
      opinionId: number;
      date: string;
    },
    any
  >;
};
