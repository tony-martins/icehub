import styles from './insights.module.css'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";

export const Insights = () => {
  return (
    <div className={styles.container}>
        <div className={styles.captionSec}>
            <p className={styles.caption}>CAPTION</p>
            <h2 className={styles.insightTitle}>Insights</h2>
        </div>

        <div className={styles.insightsCard}>
            <div className={styles.firstInsight}>
                <div className={styles.imgContainer}>
                    <p className={styles.tag}>#BRANDING</p>
                    <div className={styles.insightImgContainer}>
                    <Image src='/image/insight1.jpg' width={384} height={356} alt='branding' className={styles.insightsImg}/>

                    </div>
                    </div>
                    <div className={styles.firstInsightContent}>
                        <h2 className={styles.blogTitle}>Blog title</h2>
                        <p className={styles.blogTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.</p>
                    </div>

                    <div className={styles.firstInsightDetails}>
                       <p className={styles.readMore}><span><FaArrowRight className={styles.arrowBlack}/></span> Read more</p>
                       <p className={styles.blogDate}>Dec 22, 2022</p> 
                    </div>
                
            </div>
        

        
            <div className={styles.firstInsight}>
                <div className={styles.imgContainer}>
                    <p className={styles.tag}>#ARTDIRECTION</p>
                    <div className={styles.insightImgContainer}>
                    <Image src='/image/insight2.jpg' width={384} height={356} alt='branding' className={styles.insightsImg}/>

                    </div>
                    </div>
                    <div className={styles.firstInsightContent}>
                        <h2 className={styles.blogTitle}>Blog title</h2>
                        <p className={styles.blogTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.</p>
                    </div>

                    <div className={styles.firstInsightDetails}>
                       <p className={styles.readMore}><span><FaArrowRight className={styles.arrow}/></span> Read more</p>
                       <p className={styles.blogDate}>Nov 11, 2022</p> 
                    </div>
                
            </div>
        

        
            <div className={styles.firstInsight}>
                <div className={styles.imgContainer}>
                    <p className={styles.tag}>#DESIGNSYSTEM</p>
                    <div className={styles.insightImgContainer}>
                    <Image src='/image/insight3.jpg' width={384} height={356} alt='branding' className={styles.insightsImg}/>

                    </div>
                    </div>
                    <div className={styles.firstInsightContent}>
                        <h2 className={styles.blogTitle}>Blog title</h2>
                        <p className={styles.blogTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.</p>
                    </div>

                    <div className={styles.firstInsightDetails}>
                       <p className={styles.readMore}><span><FaArrowRight className={styles.arrow}/></span> Read more</p>
                       <p className={styles.blogDate}>Oct 9, 2022</p> 
                    </div>
                
            </div>
        </div>
    </div>
  )
}
