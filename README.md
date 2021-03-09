# Requirements

- nodejs 14.15.5
- npm 6.14.11

# Instructions

- The code was written used nodejs version 14.15.5, I'm not doing anything particularly outlandish with the script, but it may need to on that version to be safe
- After downloading, run `npm i` from the root directory to install the dependencies
- Ensure the files are in the input directory
- run `node index.js` to execute the script, assuming all goes well the output csv will appear in the output folder

# Assumptions

With the requirements given I would ordinarily have gone back to the analyst to get some more details about the nature of the process and the requirements themselves. Since this was a test I just made some assumptions instead:

1. This is a one time process, there is no need to run the script ongoing. As such, I've basically hardcoded the files into the script, I could've made it dynamic based on the the contents of the folder, the file names etc but given the way the requirement was written that seemed overkill.
2. There isn't any need for additional files to be included in the process. No need for a catalogC or anything like that.
3. The script will be executed by someone with access to the required software. I'm assuming that rather than handing the script over to the business to execute, instead the developers will execute it and just hand the output back to the business person.
4. The information relating between the products and the suppliers wasn't essential for the task at hand. I may have totally misunderstood the requirements, but it didn't seem to be required.
5. CatalogA has priority over catalogB, so if a common item appears in both, then the one from catalogA will be the one that's used.

My solution would have differed had I not made these assumptions. I possibly would have built it to be more flexible, more modular etc; But I didn't want to sink the time in if it wasn't a requirement.

# Notes

I'm not 100% sure if I interpreted the requirements correctly. It seemed like the key note was relating to whether or not products shared common barcodes when it came to identifying unique products. Again, this is something I would have ordinarily clarified with a business person before going ahead and building the thing.