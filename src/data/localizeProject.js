export function localizeProject(t, proj) {
  const features = t(`items.${proj.id}.features`, { returnObjects: true });

  return {
    ...proj,
    title: t(`items.${proj.id}.title`, { defaultValue: proj.title }),
    description: t(`items.${proj.id}.description`, { defaultValue: proj.description ?? "" }),
    subDescription: t(`items.${proj.id}.subDescription`, { defaultValue: proj.subDescription ?? "" }),
    features: Array.isArray(features) ? features : proj.features ?? [],
  };
}

export function categoryLabel(t, category) {
  return t(`categories.${category}`, { defaultValue: category });
}
