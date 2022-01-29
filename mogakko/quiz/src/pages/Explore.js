import Layout from "../components/shared/Layout";
import styles from './Explore.module.css';
import ContentsLayout from "../components/shared/ContentsLayout";
import youtubeData from '../data/youtubeData.json';
import HorizontalCard from "../components/shared/HorizontalCard";

function Explore(){

        return (
          <Layout activeMenu="explore">
            <ContentsLayout>
              {youtubeData['data'].map(function (data, index) {
                return <HorizontalCard key={`explore-card-${index}`} data={data} />;
              })}
            </ContentsLayout>
          </Layout>
        );
      

}

export default Explore;

/*

    return(
        <Layout activeMenu="explore">    
           <ContentsLayout>
           {youtubeData['data'].map(function(data, index){
               return <ExploreCard key = {`explore-card-${index}`}></ExploreCard>;
           })}
           </ContentsLayout>
        </Layout>
        
    );
*/