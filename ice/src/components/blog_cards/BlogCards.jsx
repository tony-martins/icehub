import Image from "next/image"
import styles from './BlogCards.module.css'


const BlogCards = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.blogHeader}>Blog Posts</h1>

        <div className={styles.blogs}>

            <div className={styles.firstBlog}>
                <div className={styles.myImgContainer}>
                <Image src="/image/readMore.jpg" alt="blog" width={606} height={320} className={styles.myImg}/>

                </div>
                <p className={styles.readMins}>5 MIN READ</p>
                <h3 className={styles.blogTitle}>Classic Books You Can't Miss</h3>
                <p className={styles.blogText}>Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et dolore magna molestie accumsan aliqua...</p>
                
                <div className={styles.user}>
                    <div className={styles.profilePicContainer}>
                    <Image src="/image/NoahCollins.png" width={88} height={133} alt="user image" className={styles.profilePic}/>

                    </div>
                    
                    <div className={styles.details}>
                        <h4 className={styles.userName}>Noah Collins</h4>
                        <p className={styles.blogDate}>Mon, 26 Nov 2026</p>
                    </div>

                </div>
            </div>


            <div className={styles.firstBlog}>
                <div className={styles.myImgContainer}>
                <Image src="/image/openBook.jpg" alt="blog" width={606} height={320} className={styles.myImg}/>

                </div>
                <p className={styles.readMins}>5 MIN READ</p>
                <h3 className={styles.blogTitle}>Romance Reads for Every Mood</h3>
                <p className={styles.blogText}>Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et dolore magna molestie accumsan aliqua...</p>
                
                <div className={styles.user}>
                    <div className={styles.profilePicContainer}>
                    <Image src="/image/grace.png" width={88} height={133} alt="user image" className={styles.profilePic}/>

                    </div>
                    
                    <div className={styles.details}>
                        <h4 className={styles.userName}>Noah Collins</h4>
                        <p className={styles.blogDate}>Mon, 26 Nov 2026</p>
                    </div>

                </div>
            </div>


            <div className={styles.firstBlog}>
                <div className={styles.myImgContainer}>
                <Image src="/image/readMore.jpg" alt="blog" width={606} height={320} className={styles.myImg}/>

                </div>
                <p className={styles.readMins}>5 MIN READ</p>
                <h3 className={styles.blogTitle}>Classic Books You Can't Miss</h3>
                <p className={styles.blogText}>Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et dolore magna molestie accumsan aliqua...</p>
                
                <div className={styles.user}>
                    <div className={styles.profilePicContainer}>
                    <Image src="/image/NoahCollins.png" width={88} height={133} alt="user image" className={styles.profilePic}/>

                    </div>
                    
                    <div className={styles.details}>
                        <h4 className={styles.userName}>Noah Collins</h4>
                        <p className={styles.blogDate}>Mon, 26 Nov 2026</p>
                    </div>

                </div>
            </div>


            <div className={styles.firstBlog}>
                <div className={styles.myImgContainer}>
                <Image src="/image/openBook.jpg" alt="blog" width={606} height={320} className={styles.myImg}/>

                </div>
                <p className={styles.readMins}>5 MIN READ</p>
                <h3 className={styles.blogTitle}>Romance Reads for Every Mood</h3>
                <p className={styles.blogText}>Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor et dolore magna molestie accumsan aliqua...</p>
                
                <div className={styles.user}>
                    <div className={styles.profilePicContainer}>
                    <Image src="/image/grace.png" width={88} height={133} alt="user image" className={styles.profilePic}/>

                    </div>
                    
                    <div className={styles.details}>
                        <h4 className={styles.userName}>Noah Collins</h4>
                        <p className={styles.blogDate}>Mon, 26 Nov 2026</p>
                    </div>

                </div>
            </div>

        </div>
        <button className={styles.blogBtn}>See More</button>
    </div>
  )
}

export default BlogCards