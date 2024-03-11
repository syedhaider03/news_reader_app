import React, {FC, useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {HeadlineCard, Loader, NewsCardLg} from 'components';
import {ViewAllHeader} from 'components/view-all-header';
import TabPills from 'components/tab-pills';
import {useAppDispatch, useAppSelector} from 'hooks';
import {
  doGetTopHeadlinesList,
  doGetTopHeadlinesListWithCategories,
} from 'slices/newsSlice';
import {CategoriesList} from 'utils/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

interface NewsItem {
  id: string;
  category: string;
  headline: string;
  authorName: string;
  hoursAgo: string;
  imageUrl: string;
  authorImageUrl: string;
}

const ItemSeparator = () => <View style={styles.separator} />;
const ListHeaderComponent = () => <View style={styles.listHeader} />;

export const Home: FC<NativeStackScreenProps<ParamList, 'Home'>> = ({
  route,
  navigation,
}) => {
  const [activeTab, setActiveTab] =
    useState<RequestOptions.Category>('general');
  const dispatch = useAppDispatch();
  const {
    topHeadlinesList,
    topHeadlinesSourcesListWithCategories,
    loadingTopHeadlinesListWithCategories,
    loadingTopHeadlines,
  } = useAppSelector(store => store.newsSlice);

  useEffect(() => {
    dispatch(doGetTopHeadlinesList({country: 'gb'}));
  }, []);

  useEffect(() => {
    dispatch(
      doGetTopHeadlinesListWithCategories({country: 'gb', category: activeTab}),
    );
  }, [activeTab]);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab as RequestOptions.Category);
  };

  const renderItem = ({item}: {item: Response.TopHeadlines}) => (
    <HeadlineCard
      category={item.source.name}
      author={item.author}
      headline={item.title}
      backgroundImage={{uri: ''}}
      logo={{uri: ''}}
      onPress={() => navigation.navigate('Details', item)}
    />
  );
  const renderMainItems = ({item}: {item: Response.TopHeadlines}) => (
    <NewsCardLg
      category={item.source.name}
      headline={item.title}
      onPress={() => navigation.navigate('Details', item)}
      authorName={item.author}
      hoursAgo={item.publishedAt}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.topViewContainer}>
        <ViewAllHeader onPressViewAll={() => {}} title="Breaking News" />
        {loadingTopHeadlines ? (
          <Loader />
        ) : (
          <FlatList
            data={topHeadlinesList}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.publishedAt}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
            contentContainerStyle={styles.flatListContent}
            ListHeaderComponent={ListHeaderComponent}
          />
        )}
      </View>
      <TabPills
        tabs={CategoriesList}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
      <ViewAllHeader
        onPressViewAll={() => {}}
        title={activeTab ?? 'Only For You'}
      />
      {loadingTopHeadlinesListWithCategories ? (
        <Loader />
      ) : (
        <FlatList
          data={topHeadlinesSourcesListWithCategories}
          renderItem={renderMainItems}
          keyExtractor={item => item.publishedAt}
          contentContainerStyle={styles.flatListContent}
          ItemSeparatorComponent={() => <View style={styles.separatorLg} />}
        />
      )}
    </View>
  );
};
