import React from 'react';

export enum StepType {
  INTRO = 'INTRO',
  AUTHOR = 'AUTHOR',
  QUESTION_SINGLE = 'QUESTION_SINGLE',
  QUESTION_MULTI = 'QUESTION_MULTI',
  TESTIMONIALS = 'TESTIMONIALS',
  URGENCY = 'URGENCY',
  BENEFITS_1 = 'BENEFITS_1',
  BENEFITS_2 = 'BENEFITS_2',
  INFO_3_THINGS = 'INFO_3_THINGS',
  DECISION = 'DECISION',
  LOADING = 'LOADING',
  SALES_PAGE = 'SALES_PAGE'
}

export interface QuizState {
  currentStepIndex: number;
  answers: Record<string, any>;
}

export interface SlideData {
  type: StepType;
  id: string;
  content: React.ReactNode;
}