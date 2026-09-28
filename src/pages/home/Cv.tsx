import { Block } from '../../components/Block';
import { Btn } from '../../components/Btn';
import { Icon } from '../../components/Icon';
import { Panel } from '../../components/Panel';
import { SectionHead } from '../../components/SectionHead';
import { useI18n } from '../../i18n/useI18n';
import s from './Cv.module.css';

export function Cv() {
  const { t } = useI18n();

  return (
    <Block id="cv">
      <div className="wrap">
        <SectionHead title="cv.title" />
        <Panel className={s.card}>
          <Icon name="cv" className={s.icon} strokeWidth={1.5} />
          <div className={s.main}>
            <h3>{t('cv.headline')}</h3>
            <p>{t('cv.body')}</p>
          </div>
          <Btn href="/cv.pdf" download="Jordi_Planas_CV.pdf" accent>
            {t('cv.btn')}
          </Btn>
        </Panel>
      </div>
    </Block>
  );
}
