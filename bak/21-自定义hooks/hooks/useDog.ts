import { reactive } from 'vue'
import axios from 'axios';




export default function () {
  let imgs = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_12785.jpg'
  ])

  // https://dog.ceo/api/breed/pembroke/images/random


  async function getOtherDog() {
    try {
      let result = await axios.get("https://dog.ceo/api/breed/pembroke/images/random")
      imgs.push(result.data.message)
      console.log(result.data);
    } catch (error) {
      console.log(error)
    }
  }

  // 向外部提供内容
  return {
    imgs, getOtherDog
  }
}