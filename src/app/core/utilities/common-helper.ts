import { AppStorage } from './app-storage';
import { Injectable } from '@angular/core';
import * as _lodash from 'lodash';
import { Meta, Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { swalHelper } from '../constants/swal-helper';

@Injectable({
  providedIn: 'root',
})
export class CommonHelper {
  constructor(
    private appStorage: AppStorage,
    private location: Location,
    private meta: Meta,
    private title: Title
  ) {}

  setMetaData(metaData: any) {
    let array = ['title', 'description', 'keywords'];
    array.forEach((e: any) => {
      if (metaData[e] != undefined && metaData[e] != null) {
        this.meta.addTag({ name: e, content: metaData[e] });
        if (e == 'title') {
          this.title.setTitle(`Kitpot Buy ${metaData[e]}`);
          this.meta.addTag({ property: 'og:title', content: metaData[e] });
        }
      }
    });
  }

  getProductName(link: any) {
    link = link.toLowerCase();
    link = link.replace(/-/g, ' ');
    link = link.replace(/\[/g, '(');
    link = link.replace(/\]/g, ')');
    return link;
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }

  logout = () => {
    swalHelper
      .takeConfirmation('Logout', 'Do you really want to logout?', 'Logout')
      .then((result) => {
        if (result.isConfirmed) {
          this.appStorage.clearAll();
          window.location.href = 'home';
        }
      });
  };

  getFilterUrl(filters: any) {
    let urlLink: String = '';
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].values.length > 0) {
        urlLink = `${urlLink}${filters[i].key}=`;
        for (let b = 0; b < filters[i].values.length; b++) {
          urlLink = `${urlLink}${filters[i].values[b]},`;
        }
        urlLink = urlLink.substring(0, urlLink.length - 1);
        urlLink = `${urlLink}&`;
      }
    }
    urlLink = urlLink.substring(0, urlLink.length - 1);
    let orgin = window.location.origin;
    let finalUrl: string = window.location.href
      .split('?')[0]
      .replace(orgin, '');
    return urlLink != '' ? `${finalUrl}?${urlLink}` : finalUrl;
  }

  ngNavigate = (link: string) => this.location.go(link);

  setFilterOnPageRefresh = (results: any) => {
    let filters: any[] = [];
    let attributes: any[] = [];
    let brands: any[] = [];
    let price: any[] = [];
    let categories: any[] = [];
    results = JSON.parse(JSON.stringify(results));

    for (let key in results) {
      filters.push({ key: key, values: results[key].split(',') });
      if (key == 'brand') {
        brands.push(...results[key].split(','));
      }
      if (key == 'categories') {
        categories.push(...results[key].split(','));
      }
      if (key == 'price') {
        let pricer = results[key].split('-');
        console.log(pricer);
        if (pricer.length == 2 && !isNaN(pricer[1])) {
          let min = pricer[0];
          let max = pricer[1];
          price.push({ min, max });
        }
      }
      if (
        key != 'brand' &&
        key != 'price' &&
        key != 'search' &&
        key != 'categories'
      ) {
        let values = results[key].split(',').sort();
        values.forEach((e: any) => {
          attributes.push({ key: key, value: e });
        });
      }
    }
    return { filters, attributes, brands, price, categories };
  };

  createAttributeFilterQuery = (attributesData: any[]) => {
    let query: any = {};
    let groupData = _lodash.groupBy(attributesData, (a: any) => {
      return a.key;
    });
    let andCondition: any[] = [],
      orCondition: any[] = [];
    for (let key in groupData) {
      if (groupData[key].length == 1) {
        andCondition.push(...groupData[key]);
      }
      if (groupData[key].length > 1) {
        orCondition.push(...groupData[key]);
      }
    }
    if (orCondition.length > 0 || andCondition.length > 0) {
      query.attributes = {};
      if (orCondition.length > 0) {
        query.attributes['$in'] = orCondition;
      }
      if (andCondition.length > 0) query.attributes['$all'] = andCondition;
    }
    return query;
  };
}
