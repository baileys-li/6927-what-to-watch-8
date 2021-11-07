import LinkType from '../../types/link';
import { BreadcrumbsActions, BreadcrumbsActionsType } from '../actions/breadcrumbsAction';

type NavigationState = {
  list: LinkType[] | null;
}

const InitialState: NavigationState = {
  list: null,
};

function breadcrumbsReducer(state = InitialState, action: BreadcrumbsActions): NavigationState {
  switch (action.type) {
    case BreadcrumbsActionsType.Rewrite:
      return {list: action.payload};
    default:
      return state;
  }
}

export default breadcrumbsReducer;

