class ChangeCategoryDataTypeInTemplates < ActiveRecord::Migration[7.0]
  def change
    change_column :templates, :category, :text
  end
end
