import './MainContent.css';
const MainContent = () => {
    return (
        <div className="main-container">
            <div className='article-item'>
                <article>
                    <h1>impresores 3D</h1>
                    <p className='category printer3d'>

                    </p>

                </article>
            </div>
            <div className='article-item'>
                <article>
                    <h1>Figures 3D</h1>
                    <p className='category figure3d'>

                    </p>
                </article>

            </div>
            <div className='article-item'>
                <article>
                    <h1>Altres</h1>
                    <p className='category altres3d'>

                    </p>
                </article>

            </div>
        </div>
    )
}
export default MainContent;