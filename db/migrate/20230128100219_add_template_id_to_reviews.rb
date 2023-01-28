class AddTemplateIdToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :template_id, :integer
  end
end
