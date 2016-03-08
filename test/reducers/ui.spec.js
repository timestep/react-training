import { Map } from 'immutable';
import uiReducer, {
  CHANGE_MODAL,
  changeModal,
} from '../../src/reducers/ui';
import { VIEW_LATEST_MATCHES } from '../../src/reducers/matches';

describe('reducers/ui', () => {
  context('(Reducer) ui', () => {
    it('should return an initial state', () => {
      const state = uiReducer();

      expect(Map.isMap(state)).to.equal(true);
    });

    it('should change the modalVisible property when CHANGE_MODAL is fired', () => {
      const state = uiReducer();
      expect(state.get('modalVisible')).to.equal('login');
      const nextState = uiReducer(state, { type: CHANGE_MODAL, payload: 'signup' });
      expect(nextState.get('modalVisible')).to.equal('signup');
    });

    it('should change the modalVisible property when CHANGE_MODAL is fired', () => {
      const state = uiReducer();
      expect(state.get('lastViewedMatches')).to.equal(null);
      const nextState = uiReducer(state, { type: VIEW_LATEST_MATCHES, payload: 0 });
      expect(nextState.get('lastViewedMatches')).to.equal(0);
    });
  });

  context('(Action) changeModal', () => {
    it('should return the CHANGE_MODAL action type', () => {
      const result = changeModal('login');
      expect(result.type).to.equal(CHANGE_MODAL);
      expect(result.payload).to.equal('login');
    });

    it('should throw an error if an invalid modal id is provided', () => {
      expect(() => { changeModal('garbage') }).to.throw(Error);
    });
  });
});
