import React, { useState } from "react";
import { CatalogSidebar } from "../components/CatalogSidebar";
import { Breadcrumbs } from "../components/Breadcrumbs";
import PropTypes from "prop-types";

export const CatalogPage = ({
  pusetSubCategories,
  engagementSubCategories,
  categoryMap,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPusetOpen, setIsPusetOpen] = useState(false);
  const [isEngagementOpen, setIsEngagementOpen] = useState(false);

  return (
    <div className="catalog_page">
      <Breadcrumbs
        selectedCategory={selectedCategory}
        isPusetOpen={isPusetOpen}
        isEngagementOpen={isEngagementOpen}
        categoryMap={categoryMap}
      />
      <CatalogSidebar
        pusetSubCategories={pusetSubCategories}
        engagementSubCategories={engagementSubCategories}
        onCategorySelect={setSelectedCategory}
        isPusetOpen={isPusetOpen}
        setIsPusetOpen={setIsPusetOpen}
        isEngagementOpen={isEngagementOpen}
        setIsEngagementOpen={setIsEngagementOpen}
      />
    </div>
  );
};

CatalogPage.propTypes = {
  pusetSubCategories: PropTypes.array.isRequired,
  engagementSubCategories: PropTypes.array.isRequired,
  categoryMap: PropTypes.object.isRequired,
};