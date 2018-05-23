import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div style={{ backgroundColor: 'white', textAlign: 'center', padding: '50px' }}>
                <img style={{ width: '100px' }} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAEsAZcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK8p/ac+Ls/wAC/gp4j8YWlsLu9sogLeNhlfMY4Ut7CgD1XGKWvx0+Bv8AwUc+LQ+MGjJ4j1Zdc0XVL6O2n094gqxrI4UGPHIxmv2KPFAk7n5F/wDBRL9qLx8nxz1Xwbo+t3ugaHouyNYbKUxmZyuS7EcnrXt//BK/9oPxj8TU8V+E/FGo3GtQaTBHd2t5dHdIgZtpjLd/Wvaf2l/2CvBH7S3iKLxDf397oGuLEIZLuwVWEqjpuVuCR612/wCzZ+y34R/Zi8OXOneHBPd3l4we71G6x5s2Og44AHoKBWdz2RmCgkkADkk9qwIvH3hq51L+zovEOlS3/wDz7JexmTrjG0NnNfKv/BT740eIPhR8FtLsPD11JYXHiK8eymu4Th0iVNzBT2z0zX48W2sX9lqS6hBe3EN8r7xcpIRIG9d2c5p2Bux/SlRXzR/wT/8AjRrPxr/Z90/UPEErXOrafO9hLdP1mCY2sffHWvpekUFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFc74+8D6R8R/CGqeGddthdaTqUDQTxnrg9wexHXNaes61YeHdLudS1O7isbC2QyTXE7BURR1JNebfDb9qT4X/FzX59E8LeL7HU9Viz/oqsVeQDqUz94fSgDxb4V/8ABMn4Z/DD4gWnigXupa01lL51rY3pXyo3H3Scctj3r7BoooAKKKKAPEv2sv2bbD9pz4YyeHZ7r7BqVtJ9p0+8IyI5cYww/ukcGvzP03/glx8Z7rxWNLubXTbTThJhtUN0Gj2f3gvU/Sv2cAxXyP8At2/toN+zXpNnofh6OG68X6nEZIzKNyWsfTeR3OegoJaR7b+z18E9M/Z++Fmk+DtMk+0C1Be4uiMGeZuWf8fSvSyM1+ETft6fHdtVF9/wsPUhh9/2YbPJ+m3HSv0f/YO/bWm/aT0++8P+JoYLTxfpsYkLQfKl3F0LhexHcU7AmfX9FFFIoKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD52/b18DeJPiF+zT4i0nwqks+p74p2gg+/NEhy6D1yK/LT9jr4OePte/aG8KyaVo2pWP9mXyT3l3LC8SQRqfm3MQOvTFfupUEFrDb7zDDHEXO5tihdx9TjrQS1cnooooKCiiigAr8cv8Agq9ouoWf7SsWo3EbjT7zSbcWrkHaSgIcD8a/XHxd4y0TwFodxrGv6nb6TpsAzJcXLhVH+Jr4m/aD+Pn7MH7UOjx+Gde8Vva3sLH7FrCWzAQOeOGPVfUU0Jn5LV9mf8EptHv7v9pz7fBE7WNnpNyLiQZ2qXACZ/Gu70X/AIJJX/ib7NqekfE/RtQ8O3GHiuYLZ3d4/UEHbmvvL9mr9mDwp+zJ4Vl0vw+kl1fXZD3upXH+tnYfyUdhQ2Skey0UUUiwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvN/2g/i9B8C/hH4g8ZzW/2t9PhzDb9pJTwqk9hmvSK4/4r/DTR/jD4A1jwjrqF9O1KExOyfeQ9mX3BoA/OD4Lf8FUfG2ufFTSdN8XaVpsvh/UrpLUpZRFJYC7BVIb+LBI61+p9fAPwi/4JTaP4B+Jlj4i1rxU+t6Zp1wLm2sEg8tnZTlPMb2OOlff1AlfqFFfEP7bn7f1/wDs6+MYPBvhbSLXUNa8hLm6urxiUhVvuqFHUketek/sVftcx/tTeENQkvdOXSvEWlOqXkMJJicN910J5/CgLnwj/wAFSvjRqviv41t4Jinkg0LQYUH2dWwJZmGWZgOuOgzXxJX6F/8ABUL9mTXIPHh+J2hWM2oaRfwqmoiBC5t5FGN5A/hIr89kjeSQIqszk4CgZJPpiqRD3P0U/wCCSvxl1n/hLta+HV5cyXWkSWpvrSORyRbup+YKOwIPSv1HHSvzm/4JZ/sz694OudU+JHiOyn0z7Zb/AGTTra4TY7ITlpCDzg9q/RkdKTLWwtFFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAfF37aP8AwT/b9pHxXF4u8Pa3b6Nr4gS3uI7uMtFOq/dOR0IBr0X9jj9kaz/ZX8Kajbvqf9sa7qjq95dKu2NQo4RB6fWvoyigViC6tobyB4LiJJ4ZBteORQysPQg9a4W0+AHw4sNXGqW/gjRIr8P5gnFmmQ3rjGK9BooGRoixoFVQqqMBQMACpKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAMXxJ4t0PwdawXWv61p2iWs86WsM+pXUdukkzZ2xqzkAucHCjk4NXtR1C20jT7m9vbmGzs7aNpp7meQRxxRqMs7MeFUAEkngAV8tf8FIP+STeBv+x40r/wBq1L/wUE8//hCvh19t/wCRJ/4TXTf+El83/UfZN5x5/wD0y37c54zs9qAPoTwb8TfCHxG+1nwn4s0PxQLQKLg6NqUN35O7O3f5bNtztbGeuD6VYPjvw0PFg8LnxDpQ8TmH7QNF+2xfbTFjO/yd2/bjvjFfN3xwntrX9s/4FzeHXSPWYrDU31x7UgBdGEQKmfHHl+Zu27uN2Mc18qz+J9d/4SkftWnwprL248bhl11biD7D/wAI+FNiYRH5/nbyc/N5O3/a5oFc/SHxH8cPh14O1yTR9f8AH3hfQ9Xi2l9P1LWba3uE3AFcxu4YZBBHHIIq94x+Kfgz4dSWieLPF+g+GWvFZrZdZ1OC0M4XG4p5jLuxuXOOmR618yeD7vQL/wDbA/aMudbktpfDM3hTSpLx7kgwtam1y5bPG3YT1rwfVv7d/wCHbvgD+2/tHkf8Jfaf2T9qz5n9n/aX+z9edu3O3P8ADtxxigLn6JxfFTwXNf6JZR+MNBkvNciE+lW6anAZNQjOcPAu7Mq8HlMjitLTPFmia1q2qaXp2s2GoanpTpHqFlbXSSzWbOCUEyKSYywBIDAZA4r5A/ae+Gr/ABU/a48G6RZ3P2DXbfwXeajo1+vW01CC5SS3l+gdQCO6lh3r5q1Px74l+JPw6/ax8R6fpt9ol/d32hR67p6H97bxRiWK+jJUnKBkcH1TOccigLn6deGfjH4C8caxJpHhvxv4b8QaqiNI9jper29zOqqQGYojlgASATjjIrtK+aR8UfD2i/Ej4N+C9O8GaFf+ENUspb7wt4gsNS3NZRwWnzMIBbhVyshQbJTkEk46V3/h/wDah+GXin/hFP7M8S/av+Epnu7bR/8AQLpPtUltnz1+aIbNuDy+0HtmgZ6vRXJ/Dj4neG/i34Uh8S+E9S/tXRZ5ZYY7r7PLDueNyjjbIqtwykdOccV1lABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAYHivwR4c8f6WuneJ/D+l+I9OWQTLZ6tZx3UIkAIDhJFI3AEjOM8ms/w78J/BHg/S9S0zQfBvh/RdN1NDHf2enaXBbw3alSpWVEQBxtYjDA8EjvXX0UAch4Y+E3gfwRZajZ+HfBugaDaakgjvoNM0uC2julAYBZVRAHGGYYbP3j6mrx8BeGW8I/8IofDmknwv5Xkf2IbGL7F5ec7PI27NuecYxmuhooA8+1f4BfDLxBfre6p8OfCWpXiRxwrcXeh2ssipGoWNQzRkgKqhQOgAAHStXxj8LPBnxFktH8WeENB8TNZqy2zazpkF2YA2NwTzFbbnaucdcD0rrKKAOc034f+F9Gu9Nu7Dw3pFjd6ZaGwsZ7awije0tj1hiZVBSPgfIuBx0qfSPBug+HtU1TU9K0PTdM1HVpFl1C7s7SOKa8cZw0zqAZCNzYLE9T61uUUAcV4c+DPw/8AB2rNqmgeBvDWh6mysjXum6Rb28xVvvAuiA4PfnmrGn/CjwTpX9lfYvB/h+z/ALJkll077PpcEf2J5f8AWtDhf3ZfJ3Fcbs85rraKAMfw34W0bwZpaaX4f0ex0PTI2Z0s9Ntkt4VZiWYhEAAJJJJxyTWxRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q==" alt="Loading" />

                <br />
                {this.props.msg}
            </div>

        )
    }
}

export default Loading;
