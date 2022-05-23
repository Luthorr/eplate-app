/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import CustomButton from 'ui/atoms/Button/Button';
import BUTTON_VARIANTS from 'constants/Button';
import Input from 'ui/atoms/Input/Input';
import goodMood from 'ui/assets/icons/moodGood.svg';
import badMood from 'ui/assets/icons/moodBad.svg';
import Tile from 'ui/atoms/Tile/Tile';
import TILE_VARIANTS from 'constants/Tile';
import Textarea from 'ui/atoms/Input/Textarea';
import Label from 'ui/atoms/Label/Label';
import { useAddComment } from 'hooks/useCommentsData';
import CustomModal from '../CustomModal/CustomModal';
import styles from './CommentCreationModal.module.css';

type CommentCreationModalProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const CommentCreationModal = ({
  isOpen,
  handleClose,
}: CommentCreationModalProps) => {
  const [opinionId, setOpinionId] = useState(0);
  const [plateText, setPlateText] = useState('');
  const [commentMsg, setCommentMsg] = useState('');

  const handleOpinionChange = (id: number) => () => setOpinionId(id);
  const handleTextInput = (value: string) => {
    setPlateText(value);
  };

  const handleCommentInput = (value: string) => {
    setCommentMsg(value);
  };

  const { commentPostMutation } = useAddComment();

  const handleCommentAddition = () => {
    const userId = 1;
    commentPostMutation({ userId, plateText, commentMsg, opinionId });
  };

  return (
    <CustomModal isOpen={isOpen} handleClose={handleClose}>
      <h4>Utwórz nowy komentarz</h4>
      <div className='d-flex flex-column gap-3 w-100'>
        <div className='d-flex  flex-column gap-3 justify-content-center'>
          <fieldset>
            <legend className={styles.legend}>Rodzaj opinii</legend>
            <div className='d-flex justify-content-center gap-3'>
              <label>
                <Tile
                  img={goodMood}
                  variant={TILE_VARIANTS.GREEN}
                  handleClick={handleOpinionChange(1)}
                  currentId={opinionId}
                />
              </label>
              <label>
                <Tile
                  img={badMood}
                  variant={TILE_VARIANTS.RED}
                  handleClick={handleOpinionChange(2)}
                  currentId={opinionId}
                />
              </label>
            </div>
          </fieldset>
        </div>
        <Label>
          Numer tablicy rejestracyjnej
          <Input
            type='text'
            placehorder='Wprowadź numer tablicy rejestracyjnej'
            value={plateText}
            onChange={handleTextInput}
          />
        </Label>
        <Label>
          Komentarz
          <Textarea
            placeholder='Wprowadź treść komentarza..'
            value={commentMsg}
            onChange={handleCommentInput}
          />
        </Label>
      </div>
      <div className={styles.buttonsWrapper}>
        <CustomButton
          variant={BUTTON_VARIANTS.PRIMARY}
          handleClick={handleCommentAddition}
        >
          Wyślij
        </CustomButton>
        <CustomButton
          variant={BUTTON_VARIANTS.PRIMARY}
          handleClick={handleClose}
        >
          Zamknij
        </CustomButton>
      </div>
    </CustomModal>
  );
};
export default CommentCreationModal;
