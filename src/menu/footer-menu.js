import FacebookIcon from '@mui/icons-material/Facebook';    
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
const links = [
    {
        label: 'Facebook',
        path: 'https://www.facebook.com/share/1Ej6WxN79J/?mibextid=LQQJ4d'
    },
    {
        label:'Github',
        path: 'https://github.com/kyawyea92'
    },
    {
        label:'Youtube',
        path: 'https://www.youtube.com/@FocForYou'
    },
    {
        label:'LinkedIn',
        path: 'https://www.linkedin.com/in/kyaw-ye-lwin/'
    },
    {
        label:'Telegram',
        path: 'https://t.me/focforyou2024'
    },
]
const followUs =() =>(
            links.map((link,index)=> (
                    <li key={index} className="mb-4">
                        <a href={link.path} className="hover:underline" target='_blank'>{link.label}</a>
                    </li>
            )));
function FooterMenu(){
    return (
<footer className="bg-white dark:bg-gray-800">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="/images/FOC.jpg" className="h-8 me-3" alt="FOC" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FOC For You</span>
              </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
          <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <label className="hover:underline">Help</label>
                      </li>
                      <li className='mb-4'>
                          <a href="#" className="hover:underline">Feedback</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Investors</a>
                      </li>
                      
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <label className="hover:underline">FOC For You</label>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">About</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        {followUs()}
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© Oct_2024_V1.0 <a href="#" className="hover:underline">FOC For You</a>. All Rights Reserved.
          </span>
            
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/share/1Ej6WxN79J/?mibextid=LQQJ4d" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2" target='_blank'>
                <FacebookIcon />
              </a>
              <a href="https://github.com/kyawyea92" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2" target='_blank'>
                <GitHubIcon />
              </a>
              <a href="https://www.youtube.com/@FocForYou" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2" target='_blank'>
                <YouTubeIcon />
              </a>
              <a href="https://www.linkedin.com/in/kyaw-ye-lwin/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2" target='_blank'>
                <LinkedInIcon />
              </a>
              <a href="https://t.me/focforyou2024" className="text-gray-500 hover:text-gray-900 dark:hover:text-white mx-2" target='_blank'>
                <TelegramIcon />
              </a>
          </div>
      </div>
    </div>
</footer>

    );
}
export default FooterMenu;