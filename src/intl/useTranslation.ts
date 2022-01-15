import { useIntl } from 'gatsby-plugin-intl';
import { useCallback } from 'react';

const useTranslation = () => {
  const intl = useIntl();

  const translate = useCallback(
    (message: string) => intl.formatMessage({ id: message }),
    [intl.formatMessage],
  );

  return { translate, lang: intl.locale };
};

export default useTranslation;
