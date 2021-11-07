import LinkType from '../../types/link';

export type BreadcrumbsActions = ReturnType<typeof rewriteLinksAction>

export const enum BreadcrumbsActionsType {
  Rewrite = 'CHANGE_NAV'
}

export const rewriteLinksAction = (links: LinkType[]) =>
  ({
    type: BreadcrumbsActionsType.Rewrite,
    payload: links,
  } as const);
