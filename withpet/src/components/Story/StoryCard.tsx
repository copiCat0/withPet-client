import React from 'react'
import StoryImage from 'components/Story/StoryImage'
import StoryWriter from 'components/Story/StoryWriter'
import StoryContent from 'components/Story/StoryContent'
import SubBtn from 'components/Story/SubBtn'

const storyCard = () => {
  return (
    <article>
      <StoryImage />
      <StoryWriter DiaryWeather={'rainy'} />
      <StoryContent />
      <SubBtn />
    </article>
  )
}

export default storyCard
