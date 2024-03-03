# Computer Graphics Competition

date: April 10, 2023
slug: computer-graphics-competition
author: Mansur Nurmukhambetov
status: Public
tags: Competition
summary: My experience in the Computer Graphics course. What I learned. My final project. The competition.
type: Post
thumbnail: Computer%20Graphics%20Competition%20c10fb57fa23c4e5eb6583c9cead9026e/WhatsApp_Image_2023-03-28_at_13.28.59.jpeg
updatedAt: April 25, 2023 2:30 PM
category: 🤖 Computer Science

Last block I did the Computer Graphics course ([WBCS019-05](https://ocasys.rug.nl/current/catalog/course/WBCS019-05)) and found it a blast. The lectures showcased applications of CG and went in depth into theory behind ray tracing and illumination models. In the labs we got to work with OpenGL and ray tracing frameworks. Our last assignment was a competition – build on top of the given frameworks and present it.

<aside>
⭐ A big thank you to the lecturer Jiri Kosinka and the Computer Graphics TA-team. I loved every minute of the course: well organised, interesting topics and assignments, the lecturer is fun and awesome to talk with. 10/10 would recommend.

</aside>

Caroline (my lab partner) and I, inspired by online images, decided to make a scene with marbles similar to the one below. The scene had to have glass spheres with swirling colored glass inside, a nature background that is reflected from the marbles and, if possible, air bubbles inside. To make it even more interesting I thought of making and animation where the camera revolves around the objects.

![Inspiration for the project – [Marble Ball by Süleyman KOÇ](https://www.behance.net/gallery/12033645/Marble-Ball)](Computer%20Graphics%20Competition%20c10fb57fa23c4e5eb6583c9cead9026e/Untitled.png)

Inspiration for the project – [Marble Ball by Süleyman KOÇ](https://www.behance.net/gallery/12033645/Marble-Ball)

We ended up using the ray tracer framework for the assignment. We began with the background, which was fairly simple to make – we placed the camera inside a large sphere who’s texture was a 360 panorama. This way it appeared as if the camera is in the scene. Along the way, we wrote a python script to make a bunch of frames and merge them into an animation. This was useful for debugging.

Then we tried adding the air bubbles and the swirly inside the balls. At first they didn’t seem to look right, as if they were on top off the balls rather than in front, but changing the refraction constants to more extreme values fixed the illusion. However, having more objects in the scene increased the render time drastically, which we were short of already, so we moved on to polishing the project.

To make a proper animations, we wanted to increase the capabilities of the framework and added features like – setable width/height of the image and camera position, rotation, FOV.

Here is what we ended up with:

![Animation of a transparent sphere levitating over the pond.](https://github.com/nomomon/raytracer_3/blob/master/scenes/2_animation/out.gif?raw=true)

Animation of a transparent sphere levitating over the pond.

![Animation of rotating in a pond around multiple transparent spheres.](https://github.com/nomomon/raytracer_3/raw/master/scenes/1_animation/out.gif)

Animation of rotating in a pond around multiple transparent spheres.

<aside>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png?20180806170715" alt="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png?20180806170715" width="40px" /> Check out the [repo on Github](https://github.com/nomomon/raytracer_3).

</aside>
