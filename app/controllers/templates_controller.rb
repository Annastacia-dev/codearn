class TemplatesController < ApplicationController
    

    def index 
        @templates = Template.all
        render json: @templates, status: :ok
    end

    def show 
        @template = Template.find(params[:id])
        render json: @template, status: :ok
    end

    def create
        @template = Template.new(template_params)
        @template.user = @current_user
        if @template.save
            render json: @template, status: :created
        else
            render json: { errors: @template.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        @template = Template.find(params[:id])
        if @template.update(template_params)
            render json: @template, status: :ok
        else
            render json: { errors: @template.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @template = Template.find(params[:id])
        @template.destroy
        render json: { message: "Template deleted" }, status: :ok
    end

    private

    def template_params
        params.permit(:image_url, :title, :description, :live_site, :features, :category, :technologies, :premium, :github_link,:user_id)
    end
    

end
