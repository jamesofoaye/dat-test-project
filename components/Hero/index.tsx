import Image from 'next/image';
import Navbar from '../Navbar';
import styles from './hero.module.scss';
import { useFetchData } from '../../Hooks/useFetchData';
import { Bars } from  'react-loader-spinner'

const Hero = () =>  {
  const { data, error } = useFetchData('contact');

  return (
    <header className={styles.container}>
        <Navbar />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Different Spice For A Different Taste</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla enim posuere quis consequat.</p>

            <button>
              Get Started
            </button>
          </div>

          <div className={styles.food}>
            <Image src='/food.svg' width={800} height={600} alt="Food" />
          </div>
        </section>

        <section className={styles.features}>
          {!data ? (
            <Bars color="#FDC913" height={80} width={80} />
          ) : 
            data.data.map((contact: any, index: number) => {
            return (
              <div className={index === 1 ? styles.feature2 : styles.feature1} key={index}>
                <div className={styles.featureIcon}>
                  <Image src={contact.icon} width={50} height={50} alt={'icon'} className={styles.featureIcon} />
                </div>

                <div className={styles.featureContent}>
                  <h3 className={styles.featureHeading}>{contact.description}</h3>
                  <p className={styles.featureText}>{contact.title}</p>
                </div>
              </div>
            );
          })}

        {error && (
          <div>
            <p>Cannot retrieve Contact Details</p>
            <p>{error?.message}</p>
          </div>
        )}
        </section>
    </header>
  );
}

export default Hero;