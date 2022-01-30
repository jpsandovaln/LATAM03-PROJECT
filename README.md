# LATAM03-PROJECT

## Video Converter Class

In order to be able to use this, make sure you have ffmpeg installed on your system

### Installing Ffmpeg
1. Go to http://www.ffmpeg.org/download.html and download the zip file that best suits your computer's specifications 
2. Unzip the zip file to a folder and save the same inside program files. Example: C:\Program Files\ffmpeg\
3. In this folder you will find several other folders, including one titled bin where ffmpeg.exe is saved
4. You need to add this path as environment variables. To do this, follow these steps.
4.1 Do a right click on "this computer" or "This PC" and then click on "Properties > Advanced System Settings > Advanced tab > Environment Variables"
4.2 In the Environment Variables window, click the "Path" row under the "Variable" column, then click Edit
4.3 Paste the path to the folder you created earlier where ffmpeg.exe is saved. For this example, that is, C:\Program Files\ffmpeg\bin\
4.4 Click OK on all the windows we just opened.
5. Ffmpeg is now installed. 

## Detection model class

### Requirements
Install python 2.7 [here](https://www.python.org/downloads/release/python-2718/)

### TensorFlow installation
Install tensorflow packages with [NPM](https://www.npmjs.com/):

```sh
npm install @tensorflow/tfjs-node
npm install @tensorflow-models/coco-ssd
```
