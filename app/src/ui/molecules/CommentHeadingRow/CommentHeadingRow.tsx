import CommentCreationModal from 'ui/organism/CommentCreationModal/CommentCreationModal';
import CustomButton from 'ui/atoms/Button/Button';
import useModal from 'hooks/useModal';
import { UseMutateFunction } from 'react-query/types/react/types';
import BUTTON_VARIANTS from 'constants/Button';

type CommentHeadingRowProps = {
  plateText: string;
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

const CommentHeadingRow = ({
  plateText,
  handlePostMutation,
}: CommentHeadingRowProps) => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='px-0'>Komentarze</h4>
        <CustomButton
          variant={BUTTON_VARIANTS.PRIMARY}
          handleClick={handleOpenModal}
        >
          Napisz komentarz
        </CustomButton>
      </div>
      <CommentCreationModal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        handlePostMutation={handlePostMutation}
        passedPlateText={plateText}
      />
    </div>
  );
};

export default CommentHeadingRow;
