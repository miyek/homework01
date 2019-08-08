import { ARTICLE } from './actionTypes';

export function articleClear() {
  return {
    type: ARTICLE.clear
  }
}

export function articleSave(article) {
  return {
    type: ARTICLE.save,
    article
  }
}
