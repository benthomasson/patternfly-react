import React from 'react';

import { useWizardContext } from '../WizardContext';
import { WizardFooterProps } from '../WizardFooter';

/**
 * Set a unique footer for the wizard. stepId is only required if inactive steps are hidden instead of unmounted.
 * @param footer
 * @param stepId
 */
export const useWizardFooter = (footer: React.ReactElement | Partial<WizardFooterProps>, stepId?: string | number) => {
  const { currentStep, setFooter } = useWizardContext();

  React.useEffect(() => {
    if (footer && (!stepId || currentStep?.id === stepId)) {
      setFooter(footer);

      // Reset the footer on unmount.
      return () => {
        setFooter(null);
      };
    }
  }, [currentStep, footer, setFooter, stepId]);
};
