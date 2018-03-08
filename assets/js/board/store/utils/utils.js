const PAGE_RANGE_DISPLAYED = 10;
const MARGIN_PAGES_DISPLAYED = 2;

export function getPagesToDisplay(rpp, totalJobs, currentPage) {
    let numPages = 0;
    const remainder = totalJobs % rpp;
    if (remainder) {
        numPages = Math.floor(totalJobs / rpp) + 1;
    } else {
        numPages = Math.floor(totalJobs / rpp);
    }

    let pagesList = [];

    if (numPages){
        for (let page = 1; page <= numPages; page++){
            if (page == 1) {
                pagesList.push(page);
            } else if((currentPage - 3 <= page) && (page <= currentPage + 3)) {
                pagesList.push(page);
            } else if (pagesList[pagesList.length - 1]){
                pagesList.push(false);
            } else if (page == numPages) {
                if (pagesList[pagesList.length - 1] != numPages) {
                    pagesList.push(page);
                }
            }
        }
    }

    return pagesList
}
