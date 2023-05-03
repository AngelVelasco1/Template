export default {
    async allAPI() {
        try {
            
            const cursor = $('.cursor');

            function moveCursor(e) {
              cursor.addClass('is-moving');
              
              gsap.to(cursor, {
                duration: 0.23,
                left: e.pageX,
                top: e.pageY,
                ease: 'power4.out'
              });
              
              clearTimeout(timer);
            
              const timer = setTimeout(function() {
                cursor.removeClass('is-moving');
              }, 300);
            }
            
            $(document).on('mousemove', moveCursor);

(window).on('mousemove', moveCursor);
            /* DOM selections */
            
            /* Variables */
            const country = 'us';
            /* API settings */
            const apiKey = `084e0cc135174cb4bad811a6571ae62a`
            let urlNews = await fetch(`https://newsapi.org/v2/top-headlines?pageSize=100&country={country}&apiKey=${apiKey}`);
            const responseJson = await urlNews.json();
        
            /* Templates */
            const getNews = async () => {
                const template = responseJson.articles.map((eachNew) => {
                    return `
                    <div class="news-card">
                        <div class="container-img">
                            <img class="img_news" src="${eachNew.urlToImage || " ./img/newspaper.png"}" />
                        </div>
                        <div class="news-content">
                            <div class="title_news">
                                ${eachNew.title}
                            </div>
                            <div class="description-news">
                                <p>${eachNew.description || eachNew.content}</p>
                            </div>
                        </div>
                        <a class="btn-news" href="${eachNew.url}" target="_blank">Show more!</a>
                    </div>
             `
                });
                renderNews.innerHTML += template.join('');
      
            }
            const getAnything = async () => {

            }
            getNews();
            getAnything();
        }
        catch (error) {
            console.error(error);
        }
        
    }
}
