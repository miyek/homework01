import { NEWS } from './actionTypes';

export function newsError(hasError) {
  return {
    type: NEWS.error,
    hasError,
  }
}

export function newsLoading(isLoading) {
  return {
    type: NEWS.loading,
    isLoading,
  }
}

export function newsSuccess(data) {
  return {
    type: NEWS.success,
    data,
  }
}


export function fetchNews() {
  return (dispatch) => {
    fetch('/')
      .then((response) => {
        if (response.status === 200) {
          dispatch(newsLoading(false));
          return [{
            "source": {
              "id": null,
              "name": "Lifehacker.com"
            },
            "author": "Brendan Hesse",
            "title": "How to Get Free Music Streaming Subscriptions From Your Mobile Carrier",
            "description": "One of the few perks you might be able to get with your cell phone subscription is free access to paid-for versions of Spotify, Apple Music, and other services—typically offered alongside a carrier’s unlimited data plans. Sure, these plans are usually the mos…",
            "url": "https://lifehacker.com/how-to-get-free-music-streaming-subscriptions-from-your-1836999331",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--4QWNaWJu--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/icqojmu5lhppsk1xapw4.jpg",
            "publishedAt": "2019-08-06T17:45:00Z",
            "content": "One of the few perks you might be able to get with your cell phone subscription is free access to paid-for versions of Spotify, Apple Music, and other servicestypically offered alongside a carriers unlimited data plans. Sure, these plans are usually the most … [+1979 chars]"
          },
            {
              "source": {
                "id": null,
                "name": "Lifehacker.com"
              },
              "author": "Emily Price",
              "title": "Amazon Prime Student Members Can Get Music Unlimited for $.99",
              "description": "If you’re a college student with an Amazon Prime Student account, now you can add Amazon Music Unlimited to that membership for an additional $.99 a month. Read more...",
              "url": "https://lifehacker.com/amazon-prime-student-members-can-get-music-unlimited-fo-1837006285",
              "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--_X0CUFsB--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/lvpskwckeiafzmrqsgz3.jpg",
              "publishedAt": "2019-08-06T18:28:00Z",
              "content": "If youre a college student with an Amazon Prime Student account, now you can add Amazon Music Unlimited to that membership for an additional $.99 a month.\r\nExisting customers are able to just add the benefit on to their account, and students who havent tried … [+1215 chars]"
            },
            {
              "source": {
                "id": null,
                "name": "Lifehacker.com"
              },
              "author": "Emily Price",
              "title": "Amazon Prime Student Members Can Get Music Unlimited for $.99",
              "description": "If you’re a college student with an Amazon Prime Student account, now you can add Amazon Music Unlimited to that membership for an additional $.99 a month. Read more...",
              "url": "https://lifehacker.com/amazon-prime-student-members-can-get-music-unlimited-fo-1837006285",
              "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--_X0CUFsB--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/lvpskwckeiafzmrqsgz3.jpg",
              "publishedAt": "2019-08-06T18:28:00Z",
              "content": null
            }];
          // return response;
        } else {
          console.warn(response.status);
        }
      })
      .then((data) => dispatch(newsSuccess(data)))
      .catch(() => dispatch(newsError(true)));
  };
}
