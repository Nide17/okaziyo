import Categories from './components/Categories';
import Process from './components/Process';
import BrowseItems from './components/BrowseItems';
import Money from './components/Money';
import JobsSlick from './components/slicks/jobs/JobsSlick';
import ScholarshipsSlick from './components/slicks/scholarships/ScholarshipsSlick';

const Main = () => {
    return (
        <>
            <Categories />
            <Process />
            <JobsSlick />
            <BrowseItems />
            <Money />
            <ScholarshipsSlick />
        </>
    );
}

export default Main;
