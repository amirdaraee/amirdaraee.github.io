---
title: 'I built a bedtime story site for Luxembourgish'
description: 'There is very little children''s audio in Luxembourgish, so I built Eemolwar: free stories in five languages with read-along text, and synthetic voices that are always labelled.'
published: true
date: 2026-10-04T19:25:07.000Z
author: amirdaraee
photo: stock/eemolwar.png
keywords:
    - luxembourgish
    - children's stories
    - audio stories
    - text to speech
    - elevenlabs
    - react
language: en
---

# I built a bedtime story site for Luxembourgish

There isn't that much children's content in Luxembourgish, and once you start looking specifically for audio stories, there is even less.

I noticed this a while ago and thought it would be nice to have something where kids could listen to a story in Luxembourgish while following the text on screen.

So I built [Eemolwar](https://eemolwar.com/).

The name means fairy tales in Luxembourgish. It has stories in Luxembourgish, German, French, English and Portuguese, and you can listen to them while reading along.

![A story page with the audio player and read-along text](/stock/eemolwar-story.webp)

My original idea was to have everything recorded by people.

Someone could write a story, someone else could translate it, another person could narrate it, and everyone would be credited. I actually built most of Eemolwar around that idea.

There was just one fairly obvious problem: finding people willing to record lots of children's stories is hard. Finding people to do it in Luxembourgish is even harder.

So I tried ElevenLabs.

I generated a Luxembourgish version of one of the stories and compared it with a human recording I already had.

I expected it to sound terrible.

It didn't.

There were still things I didn't like about it, but it was good enough that I started experimenting with more stories. Then I got carried away and started giving different characters different voices, adding some sound effects, and making the text follow the narration.

That created another problem though.

I really didn't want someone opening Eemolwar, hearing a voice, and assuming a person had recorded it when they hadn't.

So synthetic narrations are marked as synthetic on the site. And if a story has both a human and a generated recording, the human one comes first. There's also a filter if you only want stories narrated by people.

I'd still much rather have people record them.

The generated voices are useful because they let me actually fill the library, especially for Luxembourgish, but I don't want them to replace the original idea of the project.

One other part of Eemolwar that I had fun with is the artwork. Instead of normal cover images, the stories use small animated paper-cut scenes made with SVG. I wanted them to feel a little like an old storytelling theatre rather than just another grid of generated thumbnails.

![The story shelf, with the paper-cut covers and synthetic voice labels](/stock/eemolwar-browse.webp)

The whole thing is built with React, Express and PostgreSQL and is running on DigitalOcean.

It's live now and free to use:

[eemolwar.com](https://eemolwar.com/)

And if you speak Luxembourgish and feel like reading a children's story out loud, even better. I'd happily replace one of the robot voices with yours.
