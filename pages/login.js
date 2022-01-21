import MainLayout from '../layouts/MainLayout'

const Login = () => {
    return (
        <MainLayout>
            <>


            <section>
                <div className='wrapper'>
                    <div className="breadcrumbs breadcrumbs_margin"><span>Главная</span> - <span>Типы туров</span></div>                    
                </div>
            </section>
                
            <section>
                <div className="wrapper wrapper_center">
                    <div className="login_page_block">
                        <div className="login_block_left">                            
                            <div className="info_block_text_login">
                                <div className="info_block_text_left">Войти на сайт</div>
                                <div className="info_block_text_right">Забыли пароль?</div>
                            </div>  
                            
                            <div className="auth_form">
                                <input type="text" className="auth_mail" placeholder="Адрес эл. почты"/>
                                <input type="text" className="auth_password" placeholder="Пароль"/>
                                <input type="checkbox" checked="true" className="remember_checkbox" id="remember" name="remember_me" value="yes"/>
                                <label htmlFor="remember_me">Запомнить меня</label>
                                
                                <button className="enter_site">ВОЙТИ</button>
                            </div>

                            <div className="title_social">или войдите через соц. сети</div> 
                            <div className="social_links_block">
                                <div className="social_links_block_item apple"></div>
                                <div className="social_links_block_item vk"></div>
                                <div className="social_links_block_item fb"></div>
                                <div className="social_links_block_item google"></div>
                            </div>
                            <div className="social_links_block_info">
                                Если вы впервые на сайте, заполните, пожалуйста, регистрационную форму: <span>Зарегистрироваться</span> 
                            </div>

                        </div>
                        <div className="login_block_right">
                            Маркетплейс авторских туров
                        </div>
                    </div>
                </div>
            </section>
            </>
        </MainLayout>
    )
}

export default Login