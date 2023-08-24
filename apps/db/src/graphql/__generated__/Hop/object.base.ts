import * as Inputs from '@/graphql/__generated__/inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const HopObject = definePrismaObject('Hop', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', HopIdFieldObject),
    name: t.exposeString('name', HopNameFieldObject),
    slug: t.exposeString('slug', HopSlugFieldObject),
    country: t.exposeString('country', HopCountryFieldObject),
    description: t.exposeString('description', HopDescriptionFieldObject),
    alpha: t.exposeFloat('alpha', HopAlphaFieldObject),
    alphaLow: t.exposeFloat('alphaLow', HopAlphaLowFieldObject),
    alphaHigh: t.exposeFloat('alphaHigh', HopAlphaHighFieldObject),
    beta: t.exposeFloat('beta', HopBetaFieldObject),
    betaLow: t.exposeFloat('betaLow', HopBetaLowFieldObject),
    betaHigh: t.exposeFloat('betaHigh', HopBetaHighFieldObject),
    caryophyllene: t.exposeFloat('caryophyllene', HopCaryophylleneFieldObject),
    caryophylleneLow: t.exposeFloat('caryophylleneLow', HopCaryophylleneLowFieldObject),
    caryophylleneHigh: t.exposeFloat('caryophylleneHigh', HopCaryophylleneHighFieldObject),
    cohumulone: t.exposeFloat('cohumulone', HopCohumuloneFieldObject),
    cohumuloneLow: t.exposeFloat('cohumuloneLow', HopCohumuloneLowFieldObject),
    cohumuloneHigh: t.exposeFloat('cohumuloneHigh', HopCohumuloneHighFieldObject),
    farnesene: t.exposeFloat('farnesene', HopFarneseneFieldObject),
    farneseneLow: t.exposeFloat('farneseneLow', HopFarneseneLowFieldObject),
    farneseneHigh: t.exposeFloat('farneseneHigh', HopFarneseneHighFieldObject),
    humulene: t.exposeFloat('humulene', HopHumuleneFieldObject),
    humuleneLow: t.exposeFloat('humuleneLow', HopHumuleneLowFieldObject),
    humuleneHigh: t.exposeFloat('humuleneHigh', HopHumuleneHighFieldObject),
    myrcene: t.exposeFloat('myrcene', HopMyrceneFieldObject),
    myrceneLow: t.exposeFloat('myrceneLow', HopMyrceneLowFieldObject),
    myrceneHigh: t.exposeFloat('myrceneHigh', HopMyrceneHighFieldObject),
    totalOil: t.exposeFloat('totalOil', HopTotalOilFieldObject),
    totalOilLow: t.exposeFloat('totalOilLow', HopTotalOilLowFieldObject),
    totalOilHigh: t.exposeFloat('totalOilHigh', HopTotalOilHighFieldObject),
    purpose: t.exposeString('purpose', HopPurposeFieldObject),
    flavor: t.exposeString('flavor', HopFlavorFieldObject),
    notes: t.exposeString('notes', HopNotesFieldObject),
    styles: t.exposeStringList('styles', HopStylesFieldObject),
  }),
});

export const HopIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopNameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopSlugFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopCountryFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopDescriptionFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopAlphaFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopAlphaLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopAlphaHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopBetaFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopBetaLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopBetaHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopCaryophylleneFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopCaryophylleneLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopCaryophylleneHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopCohumuloneFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopCohumuloneLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopCohumuloneHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopFarneseneFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopFarneseneLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopFarneseneHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopHumuleneFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopHumuleneLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopHumuleneHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopMyrceneFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopMyrceneLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopMyrceneHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopTotalOilFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopTotalOilLowFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopTotalOilHighFieldObject = defineExposeObject('Float', {
  description: undefined,
  nullable: false,
});

export const HopPurposeFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopFlavorFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopNotesFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const HopStylesFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});
