import { createAction } from '@reduxjs/toolkit';
import LinkType from '../../types/link';

export type BreadcrumbsActions = ReturnType<typeof rewriteLinksAction>

export const enum BreadcrumbsActionsType {
  Rewrite = 'CHANGE_NAV'
}

export const rewriteLinksAction = createAction<LinkType[]>(BreadcrumbsActionsType.Rewrite);
